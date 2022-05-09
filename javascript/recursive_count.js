function recursiveCount(no = 0) {
  if (no === 10) { return undefined }
  console.log(no)
	return recursiveCount(no+1)
}

if (require.main === module) {
  recursiveCount();
}

recursiveCount(8)

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
