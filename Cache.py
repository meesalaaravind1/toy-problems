class Cache:
    def __init__(self,capacity):
        '''capacity is size,files is the file dictionary and frequency is the count of file opened.'''
        super().__init__()
        self.capacity = capacity
        self.files = {}     # key is name of
        self.lru = {}
        self.count=0

    def put(self,key,data):
        pass

    def get(self,key):
        pass

    def get_cache(self):
        pass

