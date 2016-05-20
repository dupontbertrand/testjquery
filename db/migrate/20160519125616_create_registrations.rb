class CreateRegistrations < ActiveRecord::Migration
  def change
    create_table :registrations do |t|
      t.string :prenom
      t.string :nom
      t.string :ville
      t.string :enseigne
      t.integer :age
      t.string :email

      t.timestamps null: false
    end
  end
end
