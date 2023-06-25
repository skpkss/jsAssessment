// Create a variable to hold your NFTs
let nftCollection = [];

// This function will generate a random token ID
function generateToken() {
  var length = 10; // Length of the generated token
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var token = '';

  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
  }

  return token;
}

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(nftTitle, nftColor, nftType, nftBling) {
  // Create an NFT object with the given metadata
  let nft = {
    tokenId: generateToken(), // Generate a random token ID
    title: nftTitle,
    color: nftColor,
    type: nftType,
    bling: nftBling
  };

  // Store the NFT object in the collection
  nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  // Iterate through each NFT in the collection
  for (let i = 0; i < nftCollection.length; i++) {
    let nft = nftCollection[i];
    console.log("NFT " + (i + 1) + " Metadata:");
    console.log("\nToken ID: " + nft.tokenId);
    console.log("Title: " + nft.title);
    console.log("Color: " + nft.color);
    console.log("NFT_Cost: " + nft.type);
    console.log("Bling: " + nft.bling);
    console.log("------------------");
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs Minted: " + nftCollection.length);
}

// Call your functions below this line

mintNFT("NFT JAVA", "Yellow", "$1,500", "Gold chain");
mintNFT("NFT SCRIPT", "Brown", "$2,500 ", "Diamond ring");
mintNFT("NFT PROOF", "Gray", "$1,000", "Silver necklace");

listNFTs();
getTotalSupply();
