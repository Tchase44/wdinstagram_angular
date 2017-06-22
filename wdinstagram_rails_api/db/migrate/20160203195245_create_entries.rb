class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :photo_url
      t.string :author
      t.string :body

      t.timestamps null: false
    end
  end
end
