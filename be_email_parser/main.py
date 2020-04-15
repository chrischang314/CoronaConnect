# -*- coding: utf-8 -*-
"""
Created on Sat Apr  4 22:31:57 2020

@author: TEJAS
"""

#N95,Ventilator, Respirator .......



import pandas as pd
import nltk
from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize
import re
from nltk.stem import WordNetLemmatizer
from datetime import datetime
import spacy
from emailExtract import ExtractingLib
nltk.download('punkt')
nltk.download('wordnet')
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


class FilterCSV:
    
    def __init__(self,df):
        self.stop_words = set(stopwords.words('english')) 
        self.keywords = set(['n95', 'mask','donate','sell','offer',
                             'ventilator','face', 'shield','face-shield','face shield',
                             'facemask','respirator', 'gown','glove','sanitizer'])
        self.df = df

    def __stripInfo(self,x):
        pattern = re.compile('[\W_]+')
        message = pattern.sub(' ', x).lower()
        lemmatizer = WordNetLemmatizer()
        filtered_sentence = [lemmatizer.lemmatize(w) for w in word_tokenize(message) if not w in self.stop_words]
        status = 0
        supplies = set()
        for ele in filtered_sentence:
            if ele in self.keywords:
                        
                status = 1
                supplies.add(ele)
                
        return ' '.join(filtered_sentence),status,' '.join(supplies)

    def __create_imp_list_from_sent(self,token_features):
        #Creating Important word list
        imp_dict = {}
        i = 0
        while i <len(token_features)-1:
            #Extract Imp words
            impwords = {}
            impNum = ''
            while token_features[i][1] == 'NUM':
                impNum +=  ' '+token_features[i][0]
                if token_features[i+1][1] == 'PROPN' or token_features[i+1][1] == 'NOUN':
                    if token_features[i+1][0] in self.keywords:
                        impwords[token_features[i+1][0]] = impNum
                        break
                    else:
                        impwords = None
                i += 1
            if impwords:
                imp_dict.update(impwords)
            i += 1
        return imp_dict

    def __extract_imp_list(self,x):
        position = set(['NUM','PROPN','NOUN','SYM'])
        nlp = spacy.load("en_core_web_sm")
        sents = x.split('.')
        imp_dict = {}
        for sent in sents:
            pattern = re.compile('[,^<>/;`][\W_]+')
            message = pattern.sub(' ', sent).lower()
            doc = nlp(message)
            
            token_features_list = [(token.text,token.pos_) for token in doc if token.pos_ in position]
            imp_dict.update(self.__create_imp_list_from_sent(token_features_list))  
        if imp_dict:
            return imp_dict
        else:
            return 'N/A'

    def __convert_datetime(self,x):
        return datetime.strptime(x[1:-1], '%d %b %Y %H:%M:%S')
    
    def process(self):
        self.df[['relInfo','Status','Keywords']] = self.df.apply(lambda x: self.__stripInfo(x['Body']),axis=1,result_type='expand')
        self.df['Date'] = self.df.apply(lambda x: self.__convert_datetime(x['Date']),axis=1)
        self.df.sort_values(by= 'Date',ascending=False,inplace=True)
        self.df = self.df[self.df['Status']==1]
        self.df['Supplies'] =  self.df.apply(lambda x:self.__extract_imp_list(x['Body']),axis=1)

    
    def requestSupplies(self,supplies = None):
        columns = ['Name','Email','Date','Body','Supplies']
        temp = self.df
        if supplies:
            temp = self.df[self.df['Supplies']==supplies]
        return temp[columns].to_json(orient='records'),len(temp)
    

    
  
def runFunction(self):
    a = ExtractingLib()
    a.create_csv()
    
    df = pd.read_csv('Email.csv')
    a = FilterCSV(df)    
    a.process()
    a.df.to_csv('savecsv.csv')

    cred = credentials.Certificate('key.json')
    #firebase_admin.initialize_app(cred)
    db = firestore.client()

    '''f = open('json.txt','w+')
    f.write(a.requestSupplies()[0])
    f.close()'''


    for index, row in a.df.iterrows():
       data = {u'Name':row['Name'], u'Email':row['Email'], u'Date':row['Date'], u'Subject':row['Subject'], u'Body':row['Body']
               ,u'Relevant info':row['relInfo'],u'Keywords':row['Keywords'],u'Supplies':row['Supplies']}
       db.collection(u'Expected Masks').add(data)
       #do we use that above or this below?
       #db.collection(u'Expected Masks').document(row[index]).set(data)

            
            
        
    
    
        
        


