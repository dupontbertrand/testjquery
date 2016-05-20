json.array!(@registrations) do |registration|
  json.extract! registration, :id, :prenom, :nom, :ville, :enseigne, :age, :email
  json.url registration_url(registration, format: :json)
end
