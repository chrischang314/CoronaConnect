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
nltk.download('punkt')
nltk.download('wordnet')

class FilterCSV:
    
    def __init__(self,df):
        self.stop_words = set(stopwords.words('english')) 
        self.keywords = set(['n95', 'mask','donate','sell','offer','ventilator','face', 'shield','face-shield'])
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

    def __convert_datetime(self,x):
        return datetime.strptime(x[1:-1], '%d %b %Y %H:%M:%S')
    
    def process(self):
        self.df[['relInfo','Status','Supplies']] = self.df.apply(lambda x: self.__stripInfo(x['Body']),axis=1,result_type='expand')
        self.df['Date'] = self.df.apply(lambda x: self.__convert_datetime(x['Date']),axis=1)
        self.df.sort_values(by= 'Date',ascending=False,inplace=True)
        self.df = self.df[self.df['Status']==1]
    
    def requestSupplies(self,supplies = None):
        columns = ['Name','Email','Date','Body','Supplies']
        temp = self.df
        if supplies:
            temp = self.df[self.df['Supplies']==supplies]
        return temp[columns].to_json(orient='records'),len(temp)
    

    
    
df = pd.read_csv('Email.csv')
a = FilterCSV(df)    
a.process()
a.df.to_csv('savecsv.csv')

f = open('json.txt','w+')
f.write(a.requestSupplies()[0])
f.close()
        
            
            
        
    
    
        
        


