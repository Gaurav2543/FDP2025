# Faculty Development Program 2025 - Website

## Overview

This is the official website for the **Faculty Development Program (FDP) 2025** on **Computational Genomics: Path to Precision Medicine**. The event is organized by **Heritage Institute of Technology (HIT), Kolkata** & **International Institute of Information Technology (IIIT), Hyderabad**.

The website provides information about the event, program schedule, key speakers, registration process, and downloadable resources.

## Features

- **Responsive Design**: Works across all screen sizes (desktop & mobile).
- **Dropdown Navigation**: Includes an interactive mobile-friendly dropdown for easier navigation.
- **Download Section**: Allows users to download the event **E-Poster** and **Program Schedule**.
- **Registration Link**: Directs users to the registration portal.
- **Key Focus Areas & Attendee Information**: Provides details about the event's objectives and intended participants.

## File Structure

```
FDP2025/
│── static/
│   ├── images/
│   │   ├── iiit_hyderabad_logo.png
│   │   ├── heritage_logo.png
│   │   ├── FDP_website_bg.jpeg
│   ├── styles.css
│   ├── script.js
│── templates/
│   ├── base.html
│   ├── home.html
│   ├── about.html
│   ├── keynote_speakers.html
│   ├── program_schedule.html
│   ├── registration.html
│   ├── committees.html
│   ├── contact.html
│── others/
│   ├── E-Poster-FDP.pdf
│   ├── Schedule-Topics.docx (Program Schedule)
│── app.py
│── requirements.txt
│── Procfile
```

## Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/your-repo/FDP2025.git
cd FDP2025
```

### 2. Create a Virtual Environment (Optional but Recommended)

```
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies

```
pip install -r requirements.txt
```

### 4. Run the Application

```
python app.py
```

- The website should now be accessible at **http://127.0.0.1:5000/**

## Routes & Pages

| Route                 | Page Description              |
| --------------------- | ----------------------------- |
| `/`                 | Homepage                      |
| `/about`            | About the FDP, IIITH, and HIT |
| `/keynote-speakers` | List of speakers              |
| `/program-schedule` | Event schedule                |
| `/registration`     | Registration details          |
| `/committees`       | Event committees              |
| `/contact`          | Contact details               |

## Mobile & Desktop Compatibility

- The navigation menu is **centered** on desktops.
- On **mobile**, a **hamburger menu** appears, which toggles the navigation.
- The **Downloads dropdown** is clickable and works on both desktop and mobile.

## Contributors

- **Gaurav Bhole** - Developer & Maintainer

---
