require 'faraday'
require 'json'

class Connection
    BASE = 'https://gnews.io/api/v3/top-news?token=990d9071ebb8b5c6202a5b355abf617f'

    def self.api
        Faraday.new(url: BASE) do |faraday|
            faraday.response :logger
            faraday.adapter Faraday.default_adapter
            faraday.headers['Content-Type'] = 'application/json'
            faraday.headers['']