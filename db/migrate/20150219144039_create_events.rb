class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :application
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
