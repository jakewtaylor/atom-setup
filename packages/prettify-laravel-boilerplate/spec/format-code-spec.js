'use babel';

import FormatCode from '../lib/format-code';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('PrettifyLaravelBoilerplate', () => {
    let workspaceElement, activationPromise;

    beforeEach(() => {
        workspaceElement = atom.views.getView(atom.workspace);
        activationPromise = atom.packages.activatePackage('prettify-laravel-boilerplate');
    });

    describe('when the prettify-laravel-boilerplate:prettify event is triggered', () => {
        it('converts Laravel boilerplate into my preferred style', () => {
            // This is an activation event, triggering it will cause the package to be
            // activated.
            atom.commands.dispatch(workspaceElement, 'prettify-laravel-boilerplate:prettify');

            waitsForPromise(() => {
                return activationPromise;
            });

            runs(() => {
                atom.commands.dispatch(workspaceElement, 'format-code:format');
            });
        });
    });
});
