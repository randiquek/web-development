# Given a string, split the values into individual values.

to_be_changed = "John Glenn|Neil Armstrong|Sally Ride|Douglas Wheelock|Mae Jemison"
changed_values = to_be_changed.split("|")
print(changed_values)

# We were given these lyrics to split for a karaoke machine. Split the
# lyrics by line using split().

lyrics = """
Katie Casey was baseball mad,
Had the fever and had it bad.
Just to root for the home town crew,
Ev'ry sou
Katie blew.
On a Saturday her young beau
Called to see if she'd like to go
To see a show, but Miss Kate said "No,
I'll tell you what you can do:"
"""
lyrics_split = lyrics.split(".")
print(lyrics_split)

# Split the lyrics by line using something other than split().

lyrics = """
Katie Casey was baseball mad,
Had the fever and had it bad.
Just to root for the home town crew,
Ev'ry sou
Katie blew.
On a Saturday her young beau
Called to see if she'd like to go
To see a show, but Miss Kate said "No,
I'll tell you what you can do:"
"""
lyrics_split = lyrics.splitlines()
print(lyrics_split)

# How long is the long village name string?

long_village_name = "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"
string_length = len(long_village_name)
print(string_length)

# We want all folders in this path without additional spaces. How would you get that?

my_path = ' /c/Users/instructor/Downloads/Submit Relating the Nonrelational Assessment Download May 10, 2021 917 AM '
my_folders = my_path.strip()
print(my_folders)

# Given this list of names, change the third name in the list to be "Wolfgang Mozart".

composers="Beethoven,Ludwig von;Liszt,Franz;Mozart,Wolfgang;Copland,Aaron"
# Separate the composers
composers_split = composers.split(";")
print(composers_split)
# # Get the third composer
third_composer = composers_split[2]
print(third_composer)
# # Find the comma in the name
comma_position = third_composer.find(",")
print(comma_position)
# # Use the slicing notation to get the last name
last_name = third_composer[0:comma_position]
print(last_name)
# # Use the slicing notation to get the first name
first_name = third_composer[comma_position + 1:]
print(first_name)
# # Join the names to get the 3rd composer's name in "first last" format 
third_composer_name = third_composer[comma_position + 1:] + " " + third_composer[0:comma_position]

# # Print the composer's name 
print(third_composer_name)

# Given a right padded string and a left padded string, clean the strings
# to get the output of "Call now! Operators are standing by"
# Hint: You will need to include the `!` when putting the strings together

left_padded = ' Operators are standing by'
right_padded = 'Call now '
print(right_padded.rstrip() + "! " + left_padded.lstrip())

# Given the student name, grade, and assignment ID, using old-style
# formatting, print out the following:
# 'Student name: Owen, Assignment ID: 0012, Grade: 94.75%'
# Hint: Use %% for the percentage symbol.

student_name = "Owen"
grade = 94.75
assignment_number = 12
print(f"Student name: {student_name}, Assignment ID: 00{assignment_number}, Grade: {grade}%")

# Given the employee ID of "30", pad the string with zeroes on the left
# to have the employee ID appear as 6-digits "000030"

employee_id = "30"
employee_id_padded = employee_id.zfill(6)
print(employee_id_padded)

# Print the following statement using raw strings:
# \n represents a new line.

print("\\n represents a new line.")

# Convert the following strings based on their variable names.

i_want_to_yell = 'yeah'
I_NEED_TO_BE_QUIET = 'SHHHHH'
this_is_a_title = 'this is a title'
sWAPcASE = 'sWAPcASE'
capitalize_this = 'capitalize this'

print(i_want_to_yell.upper())
print(I_NEED_TO_BE_QUIET.lower())
print(this_is_a_title.title())
print(sWAPcASE.swapcase())
print(capitalize_this.capitalize())



