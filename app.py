from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def program():
    return render_template('about.html')

@app.route('/keynote-speakers')
def keynote_speakers():
    return render_template('keynote_speakers.html')

@app.route('/program-schedule')
def workshops():
    return render_template('program_schedule.html')

@app.route('/registration')
def registration():
    return render_template('registration.html')

@app.route('/committees')
def committees():
    return render_template('committees.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)