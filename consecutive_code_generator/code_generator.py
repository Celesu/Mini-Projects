def code_generator(last_code=""):
  code_str = 'bcdfghjklmnpqrstvwxyz0123456789'
  
  if last_code == "":
    return 'b'

  for i in range(len(last_code)-1, -1, -1):
    if last_code[i] != '9':
      last_code = last_code[:i] + code_str[code_str.index(last_code[i]) + 1] + last_code[i + 1:]
      break
    
    last_code = last_code[:i] + 'b' + last_code[i + 1:]
    if i == 0:
      last_code = 'b' + last_code
        
  return last_code


print(code_generator('89933'))
print(code_generator('999'))
print(code_generator('789'))
print(code_generator(''))
print(code_generator('997899'))
