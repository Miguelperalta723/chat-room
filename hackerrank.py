#minimum deletions to be anagram

def make_map(s):
    temp_map = {}
    for char in s:
        if char not in temp_map:
            temp_map[char] = 1
        else:
            temp_map[char] +=1 
    return temp_map        
def make_anagram(str1, str2):
    str1_map1 = make_map(str1)
    str2_map2 = make_map(str2)
 
    ctr = 0
    for key in str2_map2.keys():
        if key not in str1_map1:
            ctr += str2_map2[key]
        else:
            ctr += max(0, str2_map2[key]-str1_map1[key])
 
    for key in str1_map1.keys():
        if key not in str2_map2:
            ctr += str1_map1[key]
        else:
            ctr += max(0, str1_map1[key]-str2_map2[key]) 
    return ctr 
str1 = input("Input string1: ")
str2 = input("Input string2: ")
print(make_anagram(str1, str2))


#remove duplicates in a single linked list solution

def remove_duplicates(head):
    current = head
    prev = None
    duplicates = dict()
    while current:
        if current.data in duplicates:
            prev.next = current.next
            current = None
        else:
            duplicates[current.data] = 1
            prev = current
        current = prev.next

#reverse string in parentheses

def reverse_parentheses(s):
  
    chars = list(s)
    open_bracket_indexes = []
    for i, c in enumerate(chars):
        if c == '(':
            open_bracket_indexes.append(i)
        elif c == ')':
            j = open_bracket_indexes.pop()
            chars[j:i] = chars[i:j:-1]
    if open_bracket_indexes:
        raise ArgumentError('Unclosed parenthesis')
    return ''.join(c for c in chars if c not in '()')
