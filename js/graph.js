// create a network
var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {
    layout: {
      randomSeed: 13,
    },
    interaction: {
      navigationButtons: false,
      keyboard: false,
      zoomView: false,
      dragView: false
    },
    physics:{
      enabled: true,
      barnesHut: {
        theta: 0.5,
        gravitationalConstant: -6000,
        centralGravity: 0,
        springLength: 95,
        springConstant: 0.04,
        damping: 0.09,
        avoidOverlap: 0
      },
    //   forceAtlas2Based: {
    //     theta: 0.5,
    //     gravitationalConstant: -50,
    //     centralGravity: 0.01,
    //     springConstant: 0.08,
    //     springLength: 100,
    //     damping: 0.4,
    //     avoidOverlap: 0
    //   },
      // repulsion: {
      //   centralGravity: 0.2,
      //   springLength: 200,
      //   springConstant: 0.05,
      //   nodeDistance: 100,
      //   damping: 0.09
      // },
    //   hierarchicalRepulsion: {
    //     centralGravity: 0.0,
    //     springLength: 100,
    //     springConstant: 0.01,
    //     nodeDistance: 120,
    //     damping: 0.09,
    //     avoidOverlap: 0
    //   },
      maxVelocity: 50,
      minVelocity: 0.1,
      solver: 'barnesHut',
      stabilization: {
        enabled: true,
            iterations: 500,
            updateInterval: 100,
            onlyDynamicEdges: false,
            fit: true
      },
      timestep: 0.5,
      adaptiveTimestep: true,
      wind: { x: 0, y: 0 }
    }
};