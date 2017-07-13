x_string = raw_input('Enter a number: ')
x = int(x_string)

if x > 500:
  print "x is quite large"
elif x > 50:
  print "x is pretty big"
elif x < 0:
  print "x is negative"
else:
  print "how boring"
