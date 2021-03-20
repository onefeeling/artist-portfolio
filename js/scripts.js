function changeShirt ($this) {
    $("#shirtPrice").text($this.value>0?("$ " + ($this.value * 20)):"");
};

function changeHat ($this) {
    $("#hatPrice").text($this.value>0?("$ " + ($this.value * 15)):"");
};

function changeHoodie ($this) {
    $("#hoodiePrice").text($this.value>0?("$ " + ($this.value * 40)):"");
};

function changeUTBSF ($this) {
    $("#UTBSFPrice").text($this.value>0?("$ " + ($this.value * 30)):"");
};

function changeTelluride ($this) {
    $("#telluridePrice").text($this.value>0?("$ " + ($this.value * 40)):"");
};

function changeNewport ($this) {
    $("#newportPrice").text($this.value>0?("$ " + ($this.value * 35)):"");
};