def code_generator(last_code=""):
  code_str = 'bcdfghjklmnpqrstvwxyz0123456789'
  new_code = last_code

  # kalau sama
  if all([1 if char_ == '9' else 0 for char_ in last_code]):
    return 'b'*(len(last_code)+1) # new_codenya


  if last_code[-1] != '9':
    new_code = last_code[:-1] + code_str[code_str.index(last_code[-1]) + 1]

  elif '9' in last_code:
    for i, char_ in enumerate(last_code[::-1]):
      i = len(last_code) - i
      if last_code[i-1] != '9':
        break

    new_code = last_code[:i-1]
    tmp_new_code = last_code[i-1:]
    while '9' in tmp_new_code:
      for i, char_ in enumerate(tmp_new_code[::-1]):
        char_i = (len(tmp_new_code)-1) - i # index dari belakang; n,n-1,n-2, ..., 0
        # print(char_i, char_)
        if char_ == '9' and char_i > 0:
          if tmp_new_code[char_i - 1] == '9':
            tmp_new_code = tmp_new_code[:char_i-1] + 'b' + 'b' + tmp_new_code[char_i+1:]
          else:
            tmp_new_code = tmp_new_code[:char_i-1] + code_str[code_str.index(tmp_new_code[char_i-1]) + 1] + 'b' + tmp_new_code[char_i+1:]
          break
    new_code += tmp_new_code
  
  return new_code


print(code_generator('999939991')) 
print(code_generator(''))
print(code_generator('99999'))
