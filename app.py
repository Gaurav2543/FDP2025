from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

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

@app.route('/download/<path:filename>')
def download_file(filename):
    return send_from_directory(os.path.join(app.root_path, 'others'), filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)