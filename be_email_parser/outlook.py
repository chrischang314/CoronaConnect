import email
import imaplib
import smtplib
import datetime
import email.mime.multipart
import config
import base64


class Outlook():
    def __init__(self):
        pass
        # self.imap = imaplib.IMAP4_SSL('imap-mail.outlook.com')
        # self.smtp = smtplib.SMTP('smtp-mail.outlook.com')

    def login(self, username, password):
        self.username = username
        self.password = password
        login_attempts = 0
        while True:
            try:
                self.imap = imaplib.IMAP4_SSL(config.imap_server,config.imap_port)
                r, d = self.imap.login(username, password)
                assert r == 'OK', 'login failed: %s' % str (r)
                print(" > Signed in as %s" % self.username, d)
                return
            except Exception as err:
                print(" > Sign in error: %s" % str(err))
                login_attempts = login_attempts + 1
                if login_attempts < 3:
                    continue
                assert False, 'login failed'

    def create_list(self):
        # self.login()
        return self.imap.list()

    def select(self, str):
        return self.imap.select(str)

    def inbox(self):
        return self.imap.select("Inbox")

    def junk(self):
        return self.imap.select("Junk")

    def logout(self):
        return self.imap.logout()

    def since_date(self, days):
        mydate = datetime.datetime.now() - datetime.timedelta(days=days)
        return mydate.strftime("%d-%b-%Y")

    def allIdsSince(self, days):
        r, d = self.imap.search(None, '(SINCE "'+self.since_date(days)+'")', 'ALL')
        lista = d[0].decode('utf8').split(' ')
        return lista

    def allIdsToday(self):
        return self.allIdsSince(1)

    def readIdsSince(self, days):
        r, d = self.imap.search(None, '(SINCE "'+self.date_since(days)+'")', 'SEEN')
        lista = d[0].decode('utf8').split(' ')
        return lista

    def readIdsToday(self):
        return self.readIdsSince(1)

    def unreadIdsSince(self, days):
        r, d = self.imap.search(None, '(SINCE "'+self.since_date(days)+'")', 'UNSEEN')
        lista = d[0].decode('utf8').split(' ')
        return lista

    def unreadIdsToday(self):
        return self.unreadIdsSince(1)

    def allIds(self):
        r, d = self.imap.search(None, "ALL")
        lista = d[0].decode('utf8').split(' ')
        return lista

    def readIds(self):
        r, d = self.imap.search(None, "SEEN")
        lista = d[0].decode('utf8').split(' ')
        return lista

    def unreadIds(self):
        r, d = self.imap.search(None, "UNSEEN") 
        lista = d[0].decode('utf8').split(' ')
        return lista

    def hasUnread(self):
        lista = self.unreadIds()
        return lista != ['']

    def getIdswithWord(self, ids, word):
        stack = []
        for id in ids:
            self.getEmail(id)
            if word in self.mailbody().lower():
                stack.append(id)
        return stack

    def getEmail(self, id):
        r, d = self.imap.fetch(id, "(RFC822)")
        self.raw_email = d[0][1]
        self.email_message = email.message_from_string(self.raw_email.decode('utf8'))
        return self.email_message

    def unread(self):
        lista = self.unreadIds()
        #latest_id = lista[-1]
        self.allrequested = []
        for ids in lista:
            self.allrequested.append(self.getEmail(ids))            
        return self.allrequested

    def readall(self):
        lista = self.allIds()
        self.allrequested = []
        for ids in lista:
            self.allrequested.append(self.getEmail(ids))             
        return self.allrequested

    
    def readOnly(self, folder):
        return self.imap.select(folder, readonly=True)

    def writeEnable(self, folder):
        return self.imap.select(folder, readonly=False)

    def rawRead(self):
        list = self.readIds()
        latest_id = list[-1]
        r, d = self.imap.fetch(latest_id, "(RFC822)")
        self.raw_email = d[0][1]
        return self.raw_email

    def mailbody(self,ids):
        if ids.is_multipart():
            for payload in ids.get_payload():
                # if payload.is_multipart(): ...
                body = (
                    payload.get_payload()
                    .split(ids['from'])[0]
                    .split('\r\n\r\n2015')[0]
                )
                return body
        else:
            body = (
                ids.get_payload()
                .split(ids['from'])[0]
                .split('\r\n\r\n2015')[0]
            )
            return body
        
    def __clean(self,strattrb):
        return strattrb.replace("\n",',').replace("\r",',')
        
    def stripRequestedMail(self):
        unreademails = []
        for ids in self.allrequested:
            email_from = str(self.__clean(ids['from'])).split("<")
            name,email= email_from[0],email_from[1][:-1]
            date = self.__clean(ids['date']).split(",")[1].split('-')[0]
            subject = self.__clean(ids['Subject'])
            body = self.__clean(self.mailbody(ids))
            unreademails.append({'Name':name,'Email':email,'Date':date,'Subject':subject,'Body':body})
        return unreademails
        
        
            
            