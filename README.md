
🚀 Project Roadmap: Smart Wi-Fi Based Occupancy & Navigation System

📌 Objective:

Build a system that uses Wi-Fi signal data, device scans, and location services to:
	•	Monitor real-time crowd density
	•	Display signal strength heatmaps
	•	Predict occupancy trends
	•	Enable indoor navigation (optional AR)

⸻

🛠️ Phase 1: Wi-Fi Mapping & Device Tracking (MVP)

🎯 Goal:

Estimate crowd density by tracking devices connected to routers.

📋 Tasks:
	•	Use nmap to scan for connected devices per SSID
	•	Automate SSID switching (script to hop across known routers)
	•	Collect SSID + MAC + signal strength
	•	Visualize with heatmap (using Wigle.net or Mapbox)
	•	Basic backend setup to store scan results

✅ Output:
	•	Real-time device count per location
	•	Visual heatmap of Wi-Fi coverage

⸻

📡 Phase 2: Mobile-Based Passive Data Collection

🎯 Goal:

Use mobile devices to enhance and validate network scan data.

📋 Tasks:
	•	Android app to gather:
	•	Connected SSID
	•	Background location (low-power mode)
	•	iOS equivalent using Shortcuts or native app
	•	Sync data to backend via API
	•	Anonymize data using device hash/fingerprint
	•	Include timestamps and auto-expiry of data for privacy

✅ Output:
	•	Crowd source device presence beyond what nmap can detect
	•	Create mobility patterns inside mapped spaces

⸻

🚧 Phase 3: Edge Cases & Error Handling

🎯 Goal:

Improve data quality & avoid false positives.

📋 Tasks:
	•	Filter out personal hotspots using:
	•	MAC address vendor prefixes
	•	Unusual traffic patterns
	•	Handle users without app installed
	•	Display confidence level in occupancy estimate
	•	Investigate feasibility of EACCESS or advanced filtering to identify SSID types

✅ Output:
	•	More reliable data
	•	Marked zones with “Low Confidence” when data is sparse

⸻

🔮 Phase 4: Predictive Queueing & Forecast System

🎯 Goal:

Forecast near-future occupancy to help users plan their visits.

📋 Tasks:
	•	Analyze past occupancy data for time-based trends
	•	Optional “I’m Planning to Go” button for crowdsource forecasting
	•	Use time-series analysis for trend prediction
	•	Show low/med/high crowd estimate with time sliders

✅ Output:
	•	Forecast panel with time-of-day heatmap
	•	Optional user input queue system (opt-in only)

⸻

🧭 Phase 5: Real-time Indoor Navigation (AR Mode)

🎯 Goal:

Help users navigate within the building using visual cues.

📋 Tasks:
	•	Map the interior using floorplans or grid-style sections
	•	Use ARCore (Android) or Unity-based AR to overlay directions
	•	Use Wi-Fi or BLE triangulation for approximate position
	•	Link destination to live density to redirect to emptier spaces

✅ Output:
	•	Arrow-based navigation
	•	Visual cues that adapt to real-time crowd levels

⸻

📦 Tech Stack Summary

## 📦 Tech Stack Summary

| Layer              | Tools                                |
|-------------------|--------------------------------------|
| Network Scanning  | nmap, airmon-ng, Bash/Python     |
| Backend           | Django / FastAPI                     |
| Frontend          | React / Next.js / Vue                |
| Heatmap & Maps    | Mapbox / Leaflet.js / Wigle.net      |
| Mobile App        | Kotlin (Android) / Swift (iOS)       |
| AR Navigation     | Unity3D + ARCore / ARKit             |
| Data Storage      | PostgreSQL / Firebase / TimescaleDB  |



⸻

💡 Future Enhancements (Post-MVP)
	•	Voice assistant mode: “Where’s the quietest place right now?”
	•	AI optimization of router placement using signal patterns
	•	Integration with library booking or entry systems
	•	Public dashboard for admin insights

⸻
