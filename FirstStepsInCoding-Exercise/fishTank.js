function fishTank (input){
    let lengthInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumVolume = lengthInCm * widthInCm * heightInCm;
    let aquariumVolumeInLiters = aquariumVolume / 1000;

    let litersNeeded = aquariumVolumeInLiters * (1 - percent/100);

    console.log(litersNeeded);
}
fishTank(["105", "77", "89", "18.5"]);