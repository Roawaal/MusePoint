# MusePoint

**MusePoint** is a pointing-based interactive system designed to support the exploration of contextual information associated with artworks.

The system uses a **Leap Motion Controller** to track the user's hand and maps pointing movement to the system cursor. When the cursor remains over a predefined interactive region of an artwork for approximately one second, MusePoint identifies the selected figure and presents corresponding contextual information.

The current prototype uses Leonardo da Vinci's *The Last Supper* as the interactive artwork.

---

## Running MusePoint

### 1. Start LeapController

Open **Git Bash** and navigate to the LeapController directory:

```bash
cd ~/OneDrive/Desktop/MusePoint/LeapController
```

Activate the Python virtual environment:

```bash
source .venv/Scripts/activate
```

Start LeapController:

```bash
python -m src.main
```

Keep this terminal running while using MusePoint.

### 2. Start the MusePoint Web Interface

Open the **MusePoint** project in Visual Studio Code.

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

The MusePoint interface should automatically open in the default web browser at a local address similar to:

```text
http://127.0.0.1:5500/
```

### 3. Test the Interaction

1. Make sure the **Leap Motion Controller** is connected and tracking your hand.
2. Use your right hand to control the system cursor through LeapController.
3. Move the cursor over one of the interactive figures in *The Last Supper*.
4. Keep the cursor within the figure's interaction region for approximately **1 second**.
5. MusePoint will display the contextual information associated with the selected figure.

The complete interaction pipeline is:

```text
Leap Motion Controller
        ↓
Ultraleap Tracking
        ↓
LeapController
        ↓
Windows Cursor
        ↓
MusePoint Web Interface
        ↓
Figure Interaction Region
        ↓
1-Second Dwell
        ↓
Contextual Information
```
