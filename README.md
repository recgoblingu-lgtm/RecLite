# RecLite Backend Server

RecLite is a full-featured, heavy-duty custom backend server built for 2025-2026 Rec Room clients, providing deep integration with complete inventories, comprehensive account syncing, full event cycles, dynamic room importing pipelines, cloud-backed web endpoints, club management, chat messaging, and player progression systems.

## Features
- Full support for 2025–2026 Rec Room client builds.
- Complete master inventory database encompassing all legacy and modern clothing items, gear, and consumable items.
- Dynamic room importer pipeline supporting custom JSON room uploads and scene serialization data blobs.
- Account creation and synchronization routes designed to bridge directly with external website control panels via Cloudflare configuration hooks.
- Integrated Photon address exchange and asset proxy redirects.
- Full club creation, management, and membership handling.
- Instant chat messaging, party invites, and watch notification pipelines.
- Player progression, level scaling, and daily challenge rotation systems.

## Setup Instructions

1. Ensure you have Node.js version 18 or higher installed on your system.
2. Clone or place this repository folder onto your local machine.
3. Open your terminal inside the root directory and install dependencies:
   ```bash
   npm install
