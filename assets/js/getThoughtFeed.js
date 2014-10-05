function getThoughtFeed(thoughtsArray, thought) {
	var metrics = int[thoughtsArray.length]; // Array of metrics corresponding to each thought in thoughtArray (metrics are in (0,1) where closer to 1 means more relevant)
	var thoughtTopics = thought.get('topic')
	var numThoughtTopics = thoughtTopics.length;
	var feed = []

	// Assign a matching metric to each "relevant" thought
	for (var i = 0; i < thoughtsArray.length; i++) { // For each thought in collection
		var elemTopics = thoughtsArray[i].get('topic');
		var numElemTopics = elemTopics.length;
		var matches = 0;
		var metric = 0;

		for (var j = 0; j < numThoughtTopics; j++) { // For each topic in input thought
			for (var k = 0; k < numElemTopics; k++) { // For each topic in current thought from thoughsArray
				if (thoughtTopics[j].get('thought') == elemTopics[k].get('thought')) {
					metric += 1 - Math.abs(thoughtTopics[j].get('score') - elemTopics[k].get('score'));
					matches++;
				}
			}
		}

		metric *= matches / numThoughtTopics / numElemTopics;
		metrics[i] = metric;

		// Sort on metrics in decreasing order while concurrently sorting thoughtTopics from more to less relevant results
		var j = i;
		var currMetric = A[i];
		var currThought = thoughtsArray[i];
		while (j > 0 and metrics[j - 1] < currMetric) {
			metrics[i] = metrics[j - 1];
			thoughtsArray[i] = thoughtsArray[j - 1];
			j--;
		}
		metrics[j] = currMetric;
		thoughtsArray[j] = currThought;
	}

	return thoughtTopics;
}