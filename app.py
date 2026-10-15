from flask import Flask, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():
    message = ""

    if request.method == "POST":
        start = request.form.get("start", "")
        destination = request.form.get("destination", "")

        if not start or not destination:
            message = "Please select both locations."
        elif start == destination:
            message = "Please select two different locations."
        else:
            message = f"Selected journey: {start} to {destination}."

    return f"""
    <!DOCTYPE html
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Location Tracker System</title>

<style>
    body {{
        font-family: Arial, sans-serif;
        background-color: #eef2f7;
        max-width: 500px;
        margin: 50px auto;
        padding: 25px;
    }}

    h1 {{
        color: #1e3a8a;
        text-align: center;
    }}

    form {{
        background-color: white;
        padding: 25px;
        border-radius: 12px;
    }}

    label {{
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
    }}

    select {{
        width: 100%;
        padding: 12px;
        border: 1px solid #cccccc;
        border-radius: 6px;
    }}

    button {{
        width: 100%;
        padding: 12px;
        background-color: #2563eb;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
    }}

    p {{
        text-align: center;
        color: #1e3a8a;
    }}
</style>

    </head>
    <body>
        <h1>Location Tracker System</h1>

        <form method="POST">
            <label>Current location:</label>
            <select name="start" required>
    <option value="">Choose current location</option>
    <option>Main Gate</option>
    <option>Cafeteria</option>
    <option>Software Engineering Department</option>
    <option>Sports Ground</option>
    <option>Library</option>
    <option>Hostel</option>
    <option>Intermediate Building</option>
            </select>
            <br><br>
            <select name="destination" required>
    <option value="">Choose destination</option>
    <option>Main Gate</option>
    <option>Cafeteria</option>
    <option>Software Engineering Department</option>
    <option>Sports Ground</option>
    <option>Library</option>
    <option>Hostel</option>
    <option>Intermediate Building</option>
</select>

            <br><br>

            <button type="submit">Check Locations</button>
        </form>

        <p>{message}</p>
    </body>
    </html>
    """