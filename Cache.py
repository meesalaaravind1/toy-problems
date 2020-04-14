class Cache:
    def __init__(self,capacity):

        super().__init__()
        self.capacity = capacity
        self.files = {}
        self.lru = {}

    def put(self,key,data):
        if key not in self.files and len(self.files)== self.capacity:
            oldest = min(self.lru.keys(), key=lambda k:self.lru[k])
            self.files.pop(oldest)
            self.lru.pop(oldest)
        self.files[key] = data
        self.lru[key] = 1
        return "put success"

    def get(self,key):
        if key in self.files:
            self.lru[key]+=1
            return self.files[key]
        else:
            print ("Not there in cache")

    def get_cache(self):
        return self.files

# obj = Cache(5)

# assert obj.put(1,"krish") == "put success"
# assert obj.put(2,"aravind") == "put success"
# assert obj.put(3,"mourya") == "put success"
# assert obj.get(1) == "krish"
# assert obj.get(2) == "aravind"
# assert obj.get(2) == "aravind"
# assert obj.put(4,"meesala") == "put success"
# assert obj.put(5,"satish") == "put success"
# assert obj.put(6,"nikhil") == "put success"
# assert obj.put(7,"viswa") == "put success"
# assert obj.get_cache() == {1: 'krish', 2: 'aravind', 5: 'satish', 6: 'nikhil', 7: 'viswa'}
# print ("all test cases passed")
