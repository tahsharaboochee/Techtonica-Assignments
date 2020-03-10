# Animal-Sighting-Tracker
Help scientists track sightings of endangered animals.

# npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

# npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

# npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

# Postgres Database
The text files created by pg_dump are intended to be read in by the psql program. The general command form to restore a dump is below 
Recreate my database by psql dbname < db.sql

# Data
# Species
This app will store data about different endangered species (e.g. polar bears, tigers). For each species, it stores:

the common name (e.g. tiger)
scientific name (e.g. Procyon lotor)
number estimated living in the wild (e.g. 3000)
conservation status code (e.g. CR, EN, LC)
record creation timestamp

# Individuals
Scientists track some individual animals of endangered species, so we store data about each individual as well

Each animal has a unique ID
Nickname (e.g. "Prickly Petunia")
Species
email address of sighter in case researchers need more info
record creation timestamp
# Sightings
When scientists spot an individual they’re tracking, they want to store some information about the sighting in the database: - The date and time of the sighting

Individual seen
Location of sighting - just text so the scientist can be as specific as they want: "37.791278, -122.394680", "Yellowstone North Gate" or just "California"
Whether the animal appeared healthy or not (obviously this just an educated guess, but good for tracking of injuries or serious illness)
