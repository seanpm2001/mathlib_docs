const commit = [["https://github.com/leanprover-community/mathlib/blob/master/src/", "https://github.com/leanprover-community/mathlib/blob/d0b1936853671209a866fa35b9e54949c81116e2/src/"], ["https://github.com/leanprover-community/mathlib/blob/master/archive/", "https://github.com/leanprover-community/mathlib/blob/d0b1936853671209a866fa35b9e54949c81116e2/archive/"], ["https://github.com/leanprover-community/mathlib/blob/master/counterexamples/", "https://github.com/leanprover-community/mathlib/blob/d0b1936853671209a866fa35b9e54949c81116e2/counterexamples/"]];
function redirectTo(tgt) {
  let loc = tgt;
  for (const [prefix, replacement] of commit) {
    if (tgt.startsWith(prefix)) {
      loc = tgt.replace(prefix, replacement);
      break;
    }
  }
  window.location.replace(loc);
}
