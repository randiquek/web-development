# import array

# # cretaing, adding, deleting, traversing arrays
# a = array.array('i', [1, 2, 3, 4 , 5])

# a.append(6)
# a.insert(3, 9)

# a.remove(2)
# a.pop(2)
# print(a)

# for element in a:
#     print(element)

# print(a[0])

# # loops and arrays

# #for

# arr = array.array('i', [10, 20, 30, 40, 50, 60, 70, 80, 90, 100])

# print(arr)

# for i in range(len(arr)):
#     arr[i] += 5 # increment each element by 5

# print(arr)


# FLOW CONTROL

# our_number = 42

# guess = int(input('Enter an integer: '))

# if guess == our_number:
#     print('Hooray!')
# elif guess > our_number:
#     print('Too high!')
# else:
#     print('Too low!')

# print('Done with the if statement')


# TERNARY OPERATORS
# user_input = int(input('Enter a number: '))

# # print("Even" if user_input % 2 == 0 else "Odd")

# result = "Positive" if user_input > 0 else "Negative" if user_input < 0 else "Zero"
# print(result)

# GUESSING GAME LOOP THAT EXITS WHEN CONDITON IS MET(CORRECT NUMBER GUESSED)
# our_number = 42 
# is_guessed = False

# while not is_guessed
#     guess = int(input('Enter an integer: '))

#     if guess == our_number:
#         print('Hooray')
#         is_guessed = True
#     elif guess > our_number:
#         print('Too high!')
#     else: 
#         print('Too low')

# FIZZ-BUZZ

# counter = 1

# while counter < 20:
#     if counter % 3 == 0 and counter % 5 == 0:
#         counter += 1
#         break
#     elif counter % 3 == 0:
#         print(f'{counter}: Fizz')
#     elif counter % 5 == 0:
#         print(f'{counter}: Buzz')

#     counter += 1


# FOR LOOP

# loop_range = range(1,5)

# for i in loop_range:
#     print(f'{i}: {i * "*"}')


# LIST OF MOVIES ARRAY
# movies = ["One", "Two", "Three"]

# for i in movies:
#     print(i)


