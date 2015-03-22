json.array!(@events) do |event|
  json.extract! event, :id, :application, :name, :url
  json.url event_url(event, format: :json)
end
