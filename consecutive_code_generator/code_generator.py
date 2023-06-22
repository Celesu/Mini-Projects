def code_generator(last_code=""):
  code_str = 'bcdfghjklmnpqrstvwxyz0123456789'

  # kalau sama
  if all([1 if char_ == '9' else 0 for char_ in last_code]):
    return 'b'*(len(last_code)+1) # new_codenya

  for i in range(len(last_code)-1, -1, -1):
    if last_code[i] == '9':
      last_code = last_code[:i] + 'b' + last_code [i + 1:]
    else:
      last_code = last_code[:i] + code_str[code_str.index(last_code[i]) + 1] + last_code[i + 1:]
      break
      
  return last_code


print(code_generator('333b93177'))
print(code_generator('89'))
print(code_generator('789'))
print(code_generator(''))
print(code_generator('997899'))
