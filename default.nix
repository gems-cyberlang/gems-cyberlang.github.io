with (import <nixpkgs> {});
let
  gems = bundlerEnv {
    name = "gems-cyberlang.github.io";
    inherit ruby;
    gemdir = ./.;
  };
in stdenv.mkDerivation {
  name = "gems-cyberlang.github.io";
  buildInputs = [gems ruby];
}
