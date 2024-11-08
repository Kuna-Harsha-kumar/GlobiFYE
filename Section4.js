//Create a index.json file with the data loaded

//Create a page as index.js with the code below

import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), 'data', 'index.json');
  
  // Read and parse the JSON data
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const items = JSON.parse(jsonData);

  return {
    props: {
      items
    }
  };
}

export default function ItemsPage({ items }) {
  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

