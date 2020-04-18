# -*- coding: utf-8 -*-
"""
Created on Sat Apr  4 17:33:58 2020

@author: TEJAS
"""

import outlook 
import csv
#set('donate', 'supplies', 'N95',)




class ExtractingLib:
    
    def __init__(self,email = 'covidconnect2020@outlook.com', pwsd = 'mithack10'):
        self.email = email
        self.pwsd = pwsd
        
    def create_csv(self):          
        mail = outlook.Outlook()
        mail.login(self.email,self.pwsd)
        mail.inbox()
        mail.readall()
        res = mail.stripRequestedMail()
        keys = res[0].keys()
        with open('/tmp/Email.csv', 'w+') as output_file:
            dict_writer = csv.DictWriter(output_file, keys)
            dict_writer.writeheader()
            dict_writer.writerows(res)

a = ExtractingLib()
a.create_csv()
