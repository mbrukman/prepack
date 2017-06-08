let x = global.__abstract ? __abstract("number", "42") : 42;
y = global.__residual ? __residual("void", function() {
  // Prepack doesn't (yet) partially evaluate a loop over an abstract value,
  // so putting the otherwise side-effect free loop into a __residual block
  // unblocks further processing.
  let res = 0;
}) : x;
inspect = function() { return x; }
