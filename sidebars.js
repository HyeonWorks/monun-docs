/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
/**
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   
};
**/
module.exports = {
  'Home Docs': [
    {
      type: 'category',
      label: 'Home Docs',
      items: [
        'Home Docs/Index',
        'Home Docs/Navigation'
      ]
    }
  ],
  'Dev Docs': [
    {
      type: 'category',
      label: 'Dev Docs',
      items: [
        'Dev Docs/Index',
        'Dev Docs/Java-Installation',
        'Dev Docs/Minecraft-Gradle-FAQ',
        'Dev Docs/Minecraft-Server-FAQ',
        'Dev Docs/Server-Script',
        {
          "invfx": [
            'Dev Docs/invfx/Index',
          ]
        },
        {
          "kommand": [
            'Dev Docs/kommand/Index',
            'Dev Docs/kommand/Kommand-0',
            'Dev Docs/kommand/Kommand-1',
            'Dev Docs/kommand/Kommand-2',
            'Dev Docs/kommand/Kommand-3',
            'Dev Docs/kommand/Kommand-3-1',
          ]
        },
        {
          "psychics": [
            {
              "Develop": [
                'Dev Docs/psychics/Develop/Index',
                'Dev Docs/psychics/Develop/Psychics-0',
                'Dev Docs/psychics/Develop/Psychics-1'
              ]
            },
            {
              "Plugin Usage": [
                'Dev Docs/psychics/Plugin Usage/Index',
                'Dev Docs/psychics/Plugin Usage/Server-Setup',
              ]
            }
          ]
        },
        {
          "tap": [
            'Dev Docs/tap/Index'
          ]
        },
      ]
    }
  ],
  'Usage Docs': [
    {
      type: 'category',
      label: 'Usage Docs',
      items: [
        'Usage Docs/Index',
        
      ]
    }
  ]
};
