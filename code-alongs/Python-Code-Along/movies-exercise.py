# display a list of 3 movies

# prompt the user to select the movie they want to see

# prompt the user for how many adult tix

# prompt the user for how many child tix

# calculate the toal for the purchase 

# adult ticket = $11.75
# child ticket = $7.25
# tax rate 7.5%

# print out the name of the movie selected, number of tickets, total cost before tax, total with tax 

movies = ['Rush Hour 2', 'Elemental', 'Wanted']
adult_ticket = 11.75
child_ticket = 7.25
tax_rate = .075

print('Welcome to AMC Theatre Movie Ticketing System')
print('Here is a list of movies available for ticket purchasing: \n1: ', movies[0], '\n2: ', movies[1], '\n3: ', movies[2])
print('Enter the option that corresponds to the movie for which you want to purchase tickets:')
user_choice = int(input('Select [1-3]'))

if user_choice == 1:
    print('You would like to purchase tickets for', movies[0])
    user_choice = movies[0]
elif user_choice == 2:
    print('You would like to purchase tickets for', movies[1])
    user_choice = movies[1]
elif user_choice == 3:
    print('You would like to purchase tickets for', movies[2])
    user_choice = movies[2]
else: 
    print('Please enter a valid input between 1 and 3')

number_of_adult_tickets = int(input('How many adult tickets would you like to purchase?'))
number_of_child_tickets = int(input('How many child tickets would you like to purchase?'))
total_cost_of_adult_tickets = number_of_adult_tickets * adult_ticket
total_cost_of_child_tickets = number_of_child_tickets * child_ticket
total_cost = total_cost_of_adult_tickets + total_cost_of_child_tickets
tax = total_cost * tax_rate
final_cost = round((total_cost + tax), 2)
print(f'Thank you for purchasing tickets. You purchased tickets for {user_choice}. Your total is: ${final_cost}')