module.exports = {
  title: 'Vue Element Admin',
  logoTitle: 'Vue Element Admin',
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   * 是否显示右侧贴边操作按钮
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   * 是否显示标签栏
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   * 是否固定标签栏
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   * 是否显示侧边栏顶部logo
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   * debugLog显示状态
   */
  errorLog: 'development'
}
