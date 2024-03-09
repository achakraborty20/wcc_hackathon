# -*- coding: utf-8 -*-
"""dataPreprocessing.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1oxxlw--qbYBTGc3W1qZQQm8PehT7_lrc
"""

# Commented out IPython magic to ensure Python compatibility.
# #cloning repo
# %%bash
# git clone https://github.com/achakraborty20/wcc_hackathon.git

import pandas as pd

csv_path = '/content/wcc_hackathon/US 2014-2018 ACS 5-Year EEO Estimates .csv'
data = pd.read_csv(csv_path)
#print(data.head())

to_drop = data[(data['Gender'] == "Total") | (data['Gender'] == "Male") | (data['Gender'] == "Female") | (data['Gender'] == "Mean Earnings - Both Sexes") | (data['Gender'] == "Mean Earnings - Male") | (data['Gender'] == "Mean Earnings - Female")].index
data.drop(to_drop, inplace=True)
print(data.head())

#occupation formatting, create a list of all unique occupations, genders, and races

def remove_opp_code(occupation):
    return occupation[:-17]

data['Occupation'] = data['Occupation'].apply(remove_opp_code)

list_occupations = pd.unique(data['Occupation'])[:-1]
gender_options = ['Total', 'Male', 'Female']
race_options = ['Hispanic or Latino', 'White', 'Black or African American', 'American Indian /Alaska Native', 'Asian', 'Native Hawaiian /Pacific Islander']

#flask implementation
from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)

@app.route('/', methods=['POST'])
def getData():
    selected_occupation = request.form.get('occupation')
    selected_gender = request.form.get('gender')
    selected_race = request.form.get('race')

    percent_gender = "Percent " + selected_gender

    # Get percentages for the selected inputs
    returned_percentage = data[(data['Occupation'] == selected_occupation) & (data['Gender'] == percent_gender)][selected_race] #.values[0]

    if (selected_gender == 'Male' | selected_gender == 'Female'):
      gender_heading = 'Median Earnings - ' + selected_gender
    else:
      gender_heading = 'Median Earnings - Both Sexes'

    # Get salary for the selected inputs
    returned_salary = data[(data['Occupation'] == selected_occupation) & (data['Gender'] == gender_heading)][selected_race] #.values[0]


    return render_template('return.html', salary=returned_salary, percentage=returned_percentage)

if __name__ == '__main__':
    app.run(debug=True)