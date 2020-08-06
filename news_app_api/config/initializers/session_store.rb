if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_news_app_api', domain: 'news_app'
  else
    Rails.application.config.session_store :cookie_store, key: '_news_app_api' 
  end