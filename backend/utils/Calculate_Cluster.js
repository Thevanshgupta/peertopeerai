import fs from 'fs/promises';

const centroidsRaw = await fs.readFile('./centroids.json', 'utf-8');
const labelsRaw = await fs.readFile('./cluster_label_map.json', 'utf-8');

const centroids = JSON.parse(centroidsRaw).centroids;
const clusterLabels = JSON.parse(labelsRaw); // e.g., { "0": "Medium", "1": "High", "2": "Low" }

function euclideanDistance(a, b) {
  return Math.sqrt(Math.pow(a - b, 2));
}

function predictCluster(value, centroids) {
  let minDist = Infinity;
  let clusterIndex = -1;
  centroids.forEach((c, i) => {
    const dist = euclideanDistance(value, c[0]);
    if (dist < minDist) {
      minDist = dist;
      clusterIndex = i;
    }
  });
  return clusterIndex;
}

// Test it with a new score
const score = 5;
const clusterIndex = predictCluster(score, centroids);
const label = clusterLabels[clusterIndex];

console.log(`Score ${score} belongs to cluster ${clusterIndex} → ${label}`);


