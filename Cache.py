class Cache:
    def __init__(self,capacity,files,frequency):
        '''capacity is size,files is the file dictionary and frequency is the count of file opened.'''
        super().__init__()
        self.capacity = capacity
        self.files = files
        self.frequency = frequency
