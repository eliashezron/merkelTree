const {MerkleTree} = require ("merkletreejs")
const keccak256 = require("keccak256")

const whitelist = [0xdB01d94217308046a792D864b16A35837aa52B86,0xdB01d94217308046a792D864b16A35837aa52B86,0xdB01d94217308046a792D864b16A35837aa52B86,0xdB01d94217308046a792D864b16A35837aa52B86,0xdB01d94217308046a792D864b16A35837aa52B86,0xdB01d94217308046a792D864b16A35837aa52B86,0xdB01d94217308046a792D864b16A35837aa52B86,0xdB01d94217308046a792D864b16A35837aa52B86
]

const leafnodes = whitelist.map(addr=>keccak256(addr))
const merkleTree = new MerkleTree(leafnodes,keccak256,{sortPairs:true})
console.log("merkel tree \n", merkleTree.toString( ))

const roothash = merkleTree.getRoot()

console.log("root hash is",roothash.toString('hex'))

const claimingAdress = leafnodes[0]

const proof = merkleTree.getHexProof(claimingAdress)

console.log(proof)