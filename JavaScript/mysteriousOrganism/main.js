// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)] ;
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  }

//Factory function for creating objects
const pAequorFactory = (num, randBase) => {
    return {
        _specimenNum: num,
        _dna: randBase, 
        get dna() {
            return this._dna;
        }, 
        get specimenNum() {
            return this._specimenNum;
        },
        //Randomly select a base in the object's dna property and change the current base to a different base
        mutate() {
            let mutatedDnaIndex = this.dna.indexOf(this.dna[Math.floor(Math.random() * 15)]);
            console.log(`dna to mutate ${this.dna}`);
            const dnaBases = ['A', 'T', 'C', 'G'];
            dnaBases.splice(dnaBases.indexOf(this.dna[mutatedDnaIndex]), 1);
            this.dna.splice(mutatedDnaIndex, 1, dnaBases[Math.floor(Math.random() *3)])
            console.log(this.dna);
        },
        //Will print message about the percentage of DNA the two objects have in common
        compareDNA(pAequor) {
          let counter = 0;
          for (let i = 0; i < this.dna.length; i++) {
            if (pAequor.dna[i] === this.dna[i]) {
              counter++;
            }
          }
          console.log(`specimen #${this.specimenNum} and #${pAeqour.specimenNum} have ${Math.round((counter/15)*100)}% DNA in common`);
        },
        //Returns true if the object's dna array contains atleast 60% 'C' or 'G bases
        willLikelySurvive() {
          let counter = 0;
          this.dna.forEach(base=>{
            if(base === 'C' || base === 'G'){
              counter++;
            }
          });
          return Math.round((counter/15)*100) >= 60;
        } 
      };
    }
    //Create 30 instances of pAequor
    const specimenArray = [];
    for(let i=1; i<=30; i++) {
      specimenArray.push(pAequorFactory(i, mockUpStrand()));
    }
    
    console.log(specimenArray);