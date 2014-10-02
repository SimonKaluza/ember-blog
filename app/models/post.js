import DS from "ember-data";

var Post = DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string')
});

// This data now comes directly from the WordPress API    
// Post.reopenClass({
//   FIXTURES: [
//     {
//       id: 1,
//       title: 'Hello Ember Blog World!',
//       content: 'Though many blog frameworks have been created and there is probably already a fine library in Ember, I am going rogue and making my own right now as an exercise before we dive too far into the Inbox Health code base.  It has been a very fun exercise so far!'
//     },
//     {
//       id: 2,
//       title: 'One day...',
//       content: "One day I'll actually have the time and energy to write real Ember blog posts.  That'll be the day."
//     },
//     {
//       id: 3,
//       title: "Fine.  It's Lorem Ipsum Time!",
//       content: "Dispassionate extraterrestrial observer! Euclid Vangelis bits of moving fluff a still more glorious dawn awaits hundreds of thousands are creatures of the cosmos, laws of physics, cosmic fugue, cosmic ocean science another world with pretty stories for which there's little good evidence rogue science! Globular star cluster a still more glorious dawn awaits worldlets, Vangelis! Kindling the energy hidden in matter! A very small stage in a vast cosmic arena not a sunrise but a galaxyrise colonies Flatland the sky calls to us at the edge of forever! Permanence of the stars tendrils of gossamer clouds venture.  Colonies, birth from which we spring cosmic fugue. Billions upon billions galaxies Sea of Tranquility, vastness is bearable only through love, permanence of the stars network of wormholes Rig Veda rich in heavy atoms Cambrian explosion, intelligent beings emerged into consciousness shores of the cosmic ocean muse about. Vanquish the impossible, science inconspicuous motes of rock and gas, take root and flourish! Vangelis inconspicuous motes of rock and gas! Circumnavigated permanence of the stars, venture astonishment! Culture. Brain is the seed of intelligence finite but unbounded. Corpus callosum. Hundreds of thousands science, how far away bits of moving fluff. Courage of our questions. The sky calls to us concept of the number one, something incredible is waiting to be known, science, cosmic fugue Rig Veda, the carbon in our apple pies. Radio telescope. Inconspicuous motes of rock and gas trillion, realm of the galaxies. Globular star cluster cosmic ocean tesseract, the only home we've ever known vanquish the impossible something incredible is waiting to be known, corpus callosum a mote of dust suspended in a sunbeam. Worldlets tingling of the spine? Another world finite but unbounded!"
//     }
//   ]
// });

export default Post;