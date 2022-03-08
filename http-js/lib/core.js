'use strict';

const ARTUS_LOADER = Symbol.for('artus#loader');
const ARTUS_PIPELINE = Symbol.for('artus#pipeline');

class ArtusCore {
  constructor() {
    const Loader = this[EGG_LOADER];
    // TODO: add loader impl
    this.loader = new Loader();

    const Pipeline = this[ARTUS_PIPELINE];
    // TODO: add pipeline impl
    this.pipeline = new Pipeline();
  }

  get [ARTUS_LOADER]() {
    return require('./loader');
  }

  get [ARTUS_PIPELINE]() {
    return require('./pipline');
  }
}

module.exports = ArtusCore;
