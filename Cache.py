class Cache:
    def __init__(self,capacity):
        '''capacity is size,files is the file dictionary and frequency is the count of file opened.'''
        super().__init__()
        self.capacity = capacity
        self.files = {}     # key is name of
        self.lru = {}

    def put(self,key,data):
        pass


    def get(self,key):
        pass

    def get_cache(self):
        pass

obj = Cache(5)

assert obj.put(1,"krish") == "put success"
assert obj.put(2,"aravind") == "put success"
assert obj.put(3,"mourya") == "put success"
assert obj.get(1) == "krish"
assert obj.get(2) == "aravind"
assert obj.get(2) == "aravind"
assert obj.put(4,"meesala") == "put success"
assert obj.put(5,"satish") == "put success"
assert obj.put(6,"nikhil") == "put success"
assert obj.put(7,"viswa") == "put success"
assert obj.get_cache() == {1: 'krish', 2: 'aravind', 5: 'satish', 6: 'nikhil', 7: 'viswa'}
print ("all test cases passed")
