import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number; // 블록의 위치
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public readonly prevHash: string,
    public readonly height: number,
    public readonly data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  // Block 추가하기 (블록에 저장하고 싶은 data를 보내줘야 함)
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks(): readonly Block[] {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");

console.log(blockchain.getBlocks());
