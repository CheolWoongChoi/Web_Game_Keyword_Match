
import Common from './js/common';
import Game from './js/game';
import Complete from './js/complete';

const common = new Common();
const game = new Game();
const complete = new Complete();

common.setReady(game, complete);
game.setCommonInstance(common);
complete.setCommonInstance(common);


