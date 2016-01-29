class Solution(object):

    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        return '1' if n == 1 else self.sayNum(self.countAndSay(n - 1))

    def sayNum(self, num):
        cur, count = None, 0
        result = []
        for n in num:
            if cur == n:
                count += 1
            else:
                if count:
                    result += str(count), cur
                cur, count = n, 1

        result += str(count), cur
        return ''.join(result)
