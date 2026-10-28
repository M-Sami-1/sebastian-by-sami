import React from 'react';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';

const HUBS = [
  {
    name: 'STUDENT UNION MAIN HALL',
    location: 'Ground Floor, Counters 1 - 3',
    hours: '08:00 - 23:30',
    status: 'Open now',
    isOpen: true
  },
  {
    name: 'NORTH QUAD FOOD PLAZA',
    location: 'Building B, Central Terrace',
    hours: '09:00 - 22:00',
    status: 'Open now',
    isOpen: true
  },
  {
    name: 'SCIENCE & ENGINEERING BLOCK',
    location: 'Block 4 Atrium Kiosk',
    hours: '08:30 - 20:00',
    status: 'Open now',
    isOpen: true
  },
  {
    name: 'CENTRAL LIBRARY STUDY CORNER',
    location: 'Basement Commons Night Hub',
    hours: '18:00 - 02:00',
    status: 'Night Shift',
    isOpen: true
  }
];

export function CampusLocations() {
  return (
    <section className="campus-hubs-section" id="campus-hubs" aria-label="Campus Hubs">
      <div className="campus-hubs-container">
        <div className="hubs-header">
          <h2 className="hubs-title">FIND SEBASTIAN</h2>
          <p className="hubs-subtitle">
            Same red, same mood, in four campus locations. Live local times, open early for breakfast to late night study sessions.
          </p>
        </div>

        <div className="hubs-card-black">
          <div className="hubs-table-header">
            <span>CAMPUS LOCATION</span>
            <span>OPERATING HOURS</span>
            <span className="text-right">STATUS</span>
          </div>

          <div className="hubs-list">
            {HUBS.map((hub, idx) => (
              <div key={idx} className="hub-row">
                <div className="hub-col-name">
                  <span className="hub-name">{hub.name}</span>
                  <span className="hub-subloc">{hub.location}</span>
                </div>
                <div className="hub-col-time">
                  <Clock size={14} className="clock-icon" />
                  <span>{hub.hours}</span>
                </div>
                <div className="hub-col-status">
                  <span className={`status-badge ${hub.isOpen ? 'is-open' : 'is-closed'}`}>
                    {hub.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
