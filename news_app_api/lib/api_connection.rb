require 'json'

class Connection
    include HTTParty
    BASE = 'https://gnews.io/api/v3/q=example?token=990d9071ebb8b5c6202a5b355abf617f'
    API_PARTIAL_URL = "api-key=#{ENV['token=990d9071ebb8b5c6202a5b355abf617f']}"

    def query
        request = HTTParty.get('https://gnews.io/api/v3/top-news?token=990d9071ebb8b5c6202a5b355abf617f'+@'search-format'+'api-partial-url').to_json
        @request_hash = JSON.parse(request)
    end

    def initialize(user_input)
        @search_format = "q=#{user_input.gsub(" ", "%20")}&"
    end
end
